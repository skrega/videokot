'use strict';

/**
 * uslugi-seo controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::vacancy.vacancy', ({strapi})=>({

  async findOne(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.db.query('api::vacancy.vacancy').findOne({
        where: {slug},
        populate: ['bottomImg','media']
    });
    const sanitizedEntity = await this.sanitizeOutput(entity);

    return this.transformResponse(sanitizedEntity)
  }
}));

