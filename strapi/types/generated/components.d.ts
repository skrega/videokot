import type { Schema, Attribute } from '@strapi/strapi';

export interface BenefitsItemsBenefitsItems extends Schema.Component {
  collectionName: 'components_benefits_items_benefits_items';
  info: {
    displayName: 'benefitsItems';
  };
  attributes: {
    icon: Attribute.Media;
    title: Attribute.String;
    text: Attribute.Text;
  };
}

export interface CharateristcsCharateristcs extends Schema.Component {
  collectionName: 'components_charateristcs_charateristcs';
  info: {
    displayName: 'charateristcs';
  };
  attributes: {
    text: Attribute.Text;
  };
}

export interface HomeAboutItemsHomeAboutItesm extends Schema.Component {
  collectionName: 'components_home_about_items_home_about_itesms';
  info: {
    displayName: 'HomeAboutItesm';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface HomeAdvantagesHomeAdvantages extends Schema.Component {
  collectionName: 'components_home_advantages_home_advantages';
  info: {
    displayName: 'HomeAdvantages';
    icon: 'crown';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    image: Attribute.Media;
  };
}

export interface HomeBlogItemsHomeBlogItems extends Schema.Component {
  collectionName: 'components_home_blog_items_home_blog_items';
  info: {
    displayName: 'homeBlogItems';
    icon: 'feather';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.String;
    image: Attribute.Media;
  };
}

export interface HomeCasesHomeCases extends Schema.Component {
  collectionName: 'components_home_cases_home_cases';
  info: {
    displayName: 'HomeCases';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface HomeQualityHomeQuality extends Schema.Component {
  collectionName: 'components_home_quality_home_qualities';
  info: {
    displayName: 'homeQuality';
    icon: 'landscape';
  };
  attributes: {
    image: Attribute.Media;
    text: Attribute.String;
  };
}

export interface HomeServicesHomeServices extends Schema.Component {
  collectionName: 'components_home_services_home_services';
  info: {
    displayName: 'homeServices';
    icon: 'cube';
  };
  attributes: {
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    subtitle: Attribute.String;
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'benefits-items.benefits-items': BenefitsItemsBenefitsItems;
      'charateristcs.charateristcs': CharateristcsCharateristcs;
      'home-about-items.home-about-itesm': HomeAboutItemsHomeAboutItesm;
      'home-advantages.home-advantages': HomeAdvantagesHomeAdvantages;
      'home-blog-items.home-blog-items': HomeBlogItemsHomeBlogItems;
      'home-cases.home-cases': HomeCasesHomeCases;
      'home-quality.home-quality': HomeQualityHomeQuality;
      'home-services.home-services': HomeServicesHomeServices;
    }
  }
}
