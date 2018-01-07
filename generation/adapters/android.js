const t = require("babel-types");
const generator = require("../core/generator");

const { isNumber, isOfClass } = require("../core/type-checks");

const typeCheckInterfaces = {
	Integer: isNumber,
	double: isNumber,
	"Matcher<View>": isOfClass("Matcher")
};

module.exports = generator({
	typeCheckInterfaces,
	supportedContentSanitizersMap: {},
	supportedTypes: ["Integer", "int", "double", "Matcher<View>"],
	renameTypesMap: {
		int: "Integer" // TODO: add test
	},
	classValue: ({ package: pkg, name }) => `${pkg}.${name}`
});
