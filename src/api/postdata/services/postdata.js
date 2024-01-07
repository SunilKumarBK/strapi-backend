'use strict';

/**
 * postdata service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::postdata.postdata');
