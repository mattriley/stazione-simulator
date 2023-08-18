import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export default ({ test, compose, assert }) => () => {

    test('search callback is invoked with entire search term on each key press', async t => {
        const onSearch = t.mock.fn();
        const { SearchBar } = compose().modules.pureComponents;
        render(<SearchBar onSearch={onSearch} />);
        const searchInput = screen.getByRole('textbox');
        await userEvent.type(searchInput, 'donut');
        assert.equal(searchInput.value, 'donut');
        assert.deepEqual(onSearch.mock.calls[0].arguments, ['d']);
        assert.deepEqual(onSearch.mock.calls[1].arguments, ['do']);
        assert.deepEqual(onSearch.mock.calls[2].arguments, ['don']);
        assert.deepEqual(onSearch.mock.calls[3].arguments, ['donu']);
        assert.deepEqual(onSearch.mock.calls[4].arguments, ['donut']);
    });

};