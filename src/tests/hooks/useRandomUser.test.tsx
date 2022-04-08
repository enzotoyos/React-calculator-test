// __tests__/fetch.test.js
import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../App";

const server = setupServer(
    rest.get(
        "https://randomuser.me/api/",
        (req, res, ctx) => {
            return res(
                ctx.json({
                    result: [{
                        picture: {
                            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/92.jpg"
                        }
                        // name: {
                        //     title: "Miss",
                        //     first: "Helen",
                        //     last: "Souza"
                        // }
                    }]
                })
            );
        }
    )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("load random user mock", async () => {
    const { container } = render(<App />);
    await waitFor(() => screen.getByText("Utilisateur"));
    expect(container.getElementsByTagName('img')).toBe(1);
});