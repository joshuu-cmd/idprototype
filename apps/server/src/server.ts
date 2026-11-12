export default {
  async fetch(request: Request): Promise<Response> {
    const { pathname } = new URL(request.url);

    if (pathname === "/api/health") {
      return Response.json({ status: "ok" });
    }

    return Response.json({ error: "Not Found" }, { status: 404 });
  },
};