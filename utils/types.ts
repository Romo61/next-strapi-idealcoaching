import PropTypes from 'prop-types'

export const linkPropTypes = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  url: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
  newTab: PropTypes.bool,
})

export const mediaPropTypes = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  alternativeText: PropTypes.string,
  caption: PropTypes.string,
  mime: PropTypes.string,
  url: PropTypes.string,
})

export const buttonLinkPropTypes = PropTypes.shape({
  theme: PropTypes.string,
  text: PropTypes.string,
  newTab: PropTypes.bool,
})
