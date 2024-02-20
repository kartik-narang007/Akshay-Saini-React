import {render, screen} from "@testing-library/react";
import {RestaurantCard} from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom"

it("Should render restaurant card component with props data", ()=>{
    render(<RestaurantCard resObj = {MOCK_DATA}/>);

    const name = screen.getByText("Pindi Chole Bhature");

    expect(name).toBeInTheDocument();

})