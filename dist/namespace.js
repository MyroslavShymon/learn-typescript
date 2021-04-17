var Utils;
(function (Utils) {
    Utils.Secret = "dsdgr";
    Utils.PI = 3.1415;
    Utils.getPass = (name, age) => `${name}${age}`;
    Utils.isEmpty = (data) => !data;
})(Utils || (Utils = {}));
const myPass = Utils.getPass("Yaroslav", 23);
const isSecret = Utils.isEmpty(Utils.Secret);
const Pi = 3;
//# sourceMappingURL=namespace.js.map