import { StrategyVerifyCallback } from "remix-auth";
import {
  OAuth2Profile,
  OAuth2Strategy,
  OAuth2StrategyOptions,
  OAuth2StrategyVerifyParams,
} from "remix-auth-oauth2";
import { UntappdUserResponse } from "./types";

/**
 * This interface declares what configuration the strategy needs from the
 * developer to correctly work.
 */
export type UntappdStrategyOptions = Pick<
  OAuth2StrategyOptions,
  "clientID" | "clientSecret" | "callbackURL"
>;

export class UntappdStrategy<User> extends OAuth2Strategy<User, OAuth2Profile> {
  name = "untappd";

  private readonly userProfileUrl =
    "https://api.untappd.com/v4/user/info?compact=true";

  constructor(
    options: Pick<
      OAuth2StrategyOptions,
      "clientID" | "clientSecret" | "callbackURL"
    >,
    verify: StrategyVerifyCallback<
      User,
      OAuth2StrategyVerifyParams<OAuth2Profile>
    >
  ) {
    super(
      {
        authorizationURL: "https://untappd.com/oauth/authenticate/",
        tokenURL: "https://untappd.com/oauth/authorize/",
        clientID: options.clientID,
        clientSecret: options.clientSecret,
        callbackURL: options.callbackURL,
      },
      verify
    );
  }

  async fetchAccessToken(code: string, params: URLSearchParams) {
    debugger;
    params.set("client_id", this.clientID);
    params.set("client_secret", this.clientSecret);
    if (params.get("grant_type") === "refresh_token") {
      params.set("refresh_token", code);
    } else {
      params.set("code", code);
    }

    // Add all parameters as query parameters, as required by Untappd
    const url = new URL(this.tokenURL);
    for (const [k, v] of params.entries()) {
      url.searchParams.append(k, v);
    }
    let response = await fetch(url.toString(), {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    if (!response.ok) {
      try {
        let body = await response.text();
        throw new Response(body, { status: 401 });
      } catch (error: any) {
        throw new Response(error.message, { status: 401 });
      }
    }
    return await this.getAccessToken(response.clone());
  }

  protected async userProfile(accessToken: string): Promise<OAuth2Profile> {
    let response = await fetch(this.userProfileUrl, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    let json: UntappdUserResponse = await response.json();
    const data = json.response.user;
    debugger;
    let profile: OAuth2Profile = {
      provider: "untappd",
      displayName: data.user_name,
      id: data.user_name,
      name: {
        familyName: data.last_name,
        givenName: data.first_name,
      },
      emails: [{ value: data.settings.email_address }],
      photos: [{ value: data.user_avatar }],
    };

    return profile;
  }
}
