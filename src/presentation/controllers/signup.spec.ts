import { SignUpController } from "./signup";

describe("SignUp Controller", () => {
  test("Should return 404 if no name is provided", () => {
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        email: "anyemail@mail.com",
        password: "12345678",
        passwordConfirmation: "12345678",
      },
    };

    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new Error("Missing param: name"));
  });
});
