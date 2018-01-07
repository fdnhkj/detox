const t = require("babel-types");
const generator = require("../core/generator");
const { callGlobal } = require("../helpers");

const { isNumber, isOfClass } = require("../core/type-checks");

const typeCheckInterfaces = {
	Integer: isNumber,
	double: isNumber,
	"Matcher<View>": isOfClass("Matcher")
};

const supportedContentSanitizersMap = {
	"Matcher<View>": {
		type: "String",
		name: "sanitize_matcher",
		value: callGlobal("sanitize_matcher")
	}
};

module.exports = generator({
	typeCheckInterfaces,
	supportedContentSanitizersMap,
	supportedTypes: ["Integer", "int", "double", "Matcher<View>"],
	renameTypesMap: {
		int: "Integer" // TODO: add test
	},
	classValue: ({ package: pkg, name }) => `${pkg}.${name}`
});
