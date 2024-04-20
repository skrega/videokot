'use strict';

/**
 * videomaterial controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::videomaterial.videomaterial', ({strapi})=>({

  async findOne(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.db.query('api::videomaterial.videomaterial').findOne({
        where: {slug},
        populate: ['thumbnail', 'media']
    });
    const sanitizedEntity = await this.sanitizeOutput(entity);

    return this.transformResponse(sanitizedEntity)
  }
}));

