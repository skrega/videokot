'use strict';

/**
 * complect controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::complect.complect', ({strapi})=>({

  async findOne(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.db.query('api::complect.complect').findOne({
        where: {slug},
        populate: ['preview', 'img','variable.productInVariable.img','variable.productTable.tableRow']
    });
    const sanitizedEntity = await this.sanitizeOutput(entity);

    return this.transformResponse(sanitizedEntity)
  }
}));