'use strict';

/**
 * Archive.js controller
 *
 * @description: A set of functions called "actions" for managing `Archive`.
 */

module.exports = {

  /**
   * Retrieve archive records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.archive.search(ctx.query);
    } else {
      return strapi.services.archive.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a archive record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.archive.fetch(ctx.params);
  },

  /**
   * Count archive records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.archive.count(ctx.query, populate);
  },

  /**
   * Create a/an archive record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.archive.add(ctx.request.body);
  },

  /**
   * Update a/an archive record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.archive.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an archive record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.archive.remove(ctx.params);
  }
};
