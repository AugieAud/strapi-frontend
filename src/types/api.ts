//typescript interfaces help catch errors before they happen, they provide code autocomplition and make it clear what data structure we are working with.

export interface StrapiResponse<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface Metadata {
  id: number;
  metaTitle: string;
  metaDescription: string;
}

export interface HeroBlock {
  __component: "blocks.hero";
  id: number;
  heading: string;
  text: string;
  link?: {
    title: string;
    link: string;
    isExternal: boolean;
    type: string;
  };
  image?: {
    id: number;
    name: string;
    alternativeText: string | null;
    url: string;
    formats: {
      thumbnail: {
        url: string;
      };
      small: {
        url: string;
      };
      medium: {
        url: string;
      };
      large: {
        url: string;
      };
    };
  };
}

export interface RowBlock {
  __component: "blocks.row";
  id: number;
  card: {
    heading: string;
    description: string;
    Image?: {
      data: {
        attributes: {
          url: string;
          alternativeText?: string;
        };
      };
    };
  }[];
}

export interface PricingPlan {
  id?: number;
  planType?: string;
  planPrice?: string;
  isFeatured?: boolean;
  services?: {
    data?: Array<{
      id: number;
      attributes: {
        title: string;
        description: string;
      };
    }>;
  };
}

export interface PricingBlock {
  __component: "blocks.pricing";
  id: number;
  name: string;
  description: string;
  plan: PricingPlan[];
}

export interface CTABlock {
  __component: "blocks.cta";
  id: number;
  heading: string;
  description: string;
  form: {
    submitLabel: string;
  };
}

export interface LandingPage {
  id: number;
  documentId: string;
  title: string;
  description: string;
  slug: string;
  metadata: Metadata;
  blocks: (HeroBlock | RowBlock | PricingBlock | CTABlock)[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
