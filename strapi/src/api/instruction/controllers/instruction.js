'use strict';

/**
 * instruction controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::instruction.instruction', ({strapi})=>({

  async findOne(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.db.query('api::instruction.instruction').findOne({
        where: {slug},
        populate: ['preview', 'table', 'list', 'table.listBenefits', 'table.listFlaws']
    });
    const sanitizedEntity = await this.sanitizeOutput(entity);

    return this.transformResponse(sanitizedEntity)
  }
}));


