import { UntappdStrategy, UntappdStrategyOptions } from ".";

describe("Untappd Strategy", () => {
  let verify = jest.fn();

  let params: UntappdStrategyOptions = {
    callbackURL: "https://localhost:3000/auth/untappd",
    clientID: "some-client-id",
    clientSecret: "s3cr3t",
  };

  beforeEach(() => {
    jest.resetAllMocks();
  });

  test("should have the name of the strategy", () => {
    const strategy = new UntappdStrategy(params, verify);
    expect(strategy.name).toBe("untappd");
  });
});
