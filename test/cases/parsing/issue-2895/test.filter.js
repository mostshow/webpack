var supportsBlockScoping = require("../../../helpers/supportsBlockScoping");

module.exports = function(config) {
	return !config.minimize && supportsBlockScoping();
};
