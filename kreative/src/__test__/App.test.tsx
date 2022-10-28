import '@testing-library/jest-dom';
import App from 'App';

const ReactTestRenderer = require('react-test-renderer');

it('Snapshot', () => {
    const tree = ReactTestRenderer
        // Arrange
        .create(
            <App />
        )
        .toJSON();

    // Assert
    expect(tree).toMatchSnapshot();
});
