"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//validates if the http object is compliant of the model
var validate = function (schema) {
    (function (req, res, next) {
        try {
            //create a schema to be able to validate the body, query, and req parameters
            schema.parse({
                body: req.body,
                query: req.query,
                params: req.params,
            });
        }
        catch (e) {
            return res.status(400).send(e.errors);
        }
    });
};
exports.default = validate;
