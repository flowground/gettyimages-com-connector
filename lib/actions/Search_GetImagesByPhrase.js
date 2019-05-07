/**
 * Auto-generated action file for "Getty Images" API.
 *
 * Generated at: 2019-05-07T14:40:54.587Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / gettyimages-com-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'Search_GetImagesByPhrase'
 * Endpoint Path: '/v3/search/images'
 * Method: 'get'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "Accept-Language",
    "Authorization",
    "age_of_people",
    "artists",
    "collection_codes",
    "collections_filter_type",
    "color",
    "compositions",
    "embed_content_only",
    "ethnicity",
    "event_ids",
    "exclude_nudity",
    "fields",
    "file_types",
    "graphical_styles",
    "graphical_styles_filter_type",
    "keyword_ids",
    "license_models",
    "minimum_size",
    "number_of_people",
    "orientations",
    "page",
    "page_size",
    "phrase",
    "product_types",
    "sort_order",
    "specific_people"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "Accept_Language": "Accept-Language",
    "Authorization": "Authorization",
    "age_of_people": "age_of_people",
    "artists": "artists",
    "collection_codes": "collection_codes",
    "collections_filter_type": "collections_filter_type",
    "color": "color",
    "compositions": "compositions",
    "embed_content_only": "embed_content_only",
    "ethnicity": "ethnicity",
    "event_ids": "event_ids",
    "exclude_nudity": "exclude_nudity",
    "fields": "fields",
    "file_types": "file_types",
    "graphical_styles": "graphical_styles",
    "graphical_styles_filter_type": "graphical_styles_filter_type",
    "keyword_ids": "keyword_ids",
    "license_models": "license_models",
    "minimum_size": "minimum_size",
    "number_of_people": "number_of_people",
    "orientations": "orientations",
    "page": "page",
    "page_size": "page_size",
    "phrase": "phrase",
    "product_types": "product_types",
    "sort_order": "sort_order",
    "specific_people": "specific_people"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = undefined;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['Api-Key'] = cfg['Api-Key'];

    let callParams = {
        spec: spec,
        operationId: 'Search_GetImagesByPhrase',
        pathName: '/v3/search/images',
        method: 'get',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}