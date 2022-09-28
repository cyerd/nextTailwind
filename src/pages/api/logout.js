import cookie from "cookie";

export default async function handler(req, res) {
  try {
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("token", null, {
        httpOnly: true,
        maxAge: -1,
        path: "/",
      })
    );
    res.status(200).json({
      success: true,
      message: "Logged out",
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Error occured",
    });
  }
}
