const ALPHANUMERIC_REGEX = /^[a-z0-9]+$/i;
const ALPHANUMERIC_WITH_WHITESPACE_REGEX = /^[\w\-\s]+$/;

module.exports = {
  alphanumeric: str => ALPHANUMERIC_REGEX.test(str),
  alphanumericWithWhitespace: str =>
    ALPHANUMERIC_WITH_WHITESPACE_REGEX.test(str),
};
