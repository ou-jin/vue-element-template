const requireAll = requireContext => requireContext.keys().map(requireContext);
// import all svg
const req = require.context('../../static/icon', false, /\.svg$/);
requireAll(req);