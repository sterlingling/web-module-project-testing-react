import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Episode from "./../Episode";

test("renders without error", () => {
    render(<Episode episode={exampleEpisodeData} />)
});

test("renders the summary test passed as prop", () => {
    render(<Episode episode={exampleEpisodeData} />);
    const sumElement = screen.getByText("summary");
    expect(sumElement).toBeInTheDocument();
    expect(sumElement).toBeTruthy();
    expect(sumElement).toHaveTextContent('summary')

});

// test("renders default image when image is not defined", () => {
//     render(<Episode episode={exampleEpisodeData} />);
//     const defaultImage = screen.queryByAltText('./stranger_things.png');
//     expect(defaultImage).toBeInTheDocument();
//     console.log(defaultImage)
// });

// ----- EXAMPLE EPISODE TEST OBJECT -----
const exampleEpisodeData = {
    id: 1,
    image: null,
    name: "",
    number: 1,
    runtime: 1,
    season: 1,
    summary:"summary"
};
