'use strict';

/**
 * new controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::new.new', ({strapi})=>({

  async findOne(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.db.query('api::new.new').findOne({
        where: {slug},
        populate: ['thumbnail', 'media', 'blogContent.img']
    });
    const sanitizedEntity = await this.sanitizeOutput(entity);

    return this.transformResponse(sanitizedEntity)
  }
}));


