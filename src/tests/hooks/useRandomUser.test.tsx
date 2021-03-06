import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../App";

const server2 = setupServer(
  rest.get("https://randomuser.me/api/", (req, res, ctx) => {
    return res(
      ctx.json({
        results: [
          {
            picture: {
              thumbnail:
                "https://randomuser.me/api/portraits/thumb/women/92.jpg",
            },
            name: {
              title: "Miss",
              first: "Helen",
              last: "Souza",
            },
          },
        ],
      })
    );
  })
);

beforeAll(() => server2.listen());
afterEach(() => server2.resetHandlers());
afterAll(() => server2.close());

test("load random user mock", async () => {
  const { container } = render(<App />);
  await waitFor(() => screen.getByText("Utilisateur"));
  expect(container.getElementsByTagName("img").length).toBe(1);
});
