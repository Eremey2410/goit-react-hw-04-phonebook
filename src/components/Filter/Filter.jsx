import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <label>
    Finde contacts by name
    <input type="text" value={value} onChange={onChange} />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Filter;
