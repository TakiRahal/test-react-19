import {screen} from '@testing-library/dom'
import {render} from "@testing-library/react";
import Card from "../../../src/components/atoms/card/components/Card";

describe('Card', () => {
    test('renders Card with correct props', () => {
        // Given
        const title = 'Title here'
        const subTitle = 'Hello Sub Title'
        const amount = 10
        const period = 'month'
        const features = []

        // When
        render(<Card title={title} subTitle={subTitle} amount={amount} period={period} features={features}/>)

        // Then
        const cardElement = screen.getByTestId(title);
        expect(cardElement).toBeDefined();
    })


    test('should exist all required props of Card', () => {
        // Given
        const title = 'Title here'
        const subTitle = 'Hello Sub Title'
        const amount = 10
        const period = 'month'
        const features = []

        // When
        render(<Card title={title} subTitle={subTitle} amount={amount} period={period} features={features}/>)
        const cardElement = screen.getByTestId(title);
        const titleElement = screen.getByText(title);
        const subTitleElement = screen.getByText(subTitle);
        const amountElement = screen.getByText(`$${amount}`);
        const periodElement = screen.getByText(`/${period}`);
        const buttonElement = screen.getByText('Get started')

        // Then
        expect(cardElement).toBeDefined();
        expect(titleElement.textContent).toEqual(title)
        expect(subTitleElement.textContent).toEqual(subTitle)
        expect(amountElement.textContent).toEqual(`$${amount}`)
        expect(periodElement.textContent).toEqual(`/${period}`)
        expect(buttonElement).toBeDefined();
    })

    test('should exist all items of list Card', () => {
        // Given
        const title = 'Title here'
        const subTitle = 'Hello Sub Title'
        const amount = 10
        const period = 'month'
        const features = ['feature0', 'feature1', 'feature2']

        // When
        render(<Card title={title} subTitle={subTitle} amount={amount} period={period} features={features}/>)

        // Then
        const listFeaturesElement = screen.getAllByRole('item-list');
        expect(listFeaturesElement).toHaveLength(features.length);
        listFeaturesElement.forEach((element, index) => {
            expect(element.textContent).toEqual(features[index])
        });

    })
})
