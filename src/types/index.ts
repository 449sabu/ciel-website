
// how-to-implement: 'ardanians/adapools.org/master/example-meta.json',
export interface ExMetadata {
  info: {
    url_png_icon_64x64: string;
    location?: string;
    social?: {
      twitter_handle?: string;
      telegram_handle?: string;
      youtube_handle?: string;
      discord_handle?: string;
      github_handle?: string;
    };
    about?: {
      me?: string;
      server?: string;
      'verification string'?: string;
    };
  };
  'my-pool-ids'?: {
    '0'?: string;
  };
};

export type Pool = {
  pool_id: string;
  hex: string;
  ticker: string | null;
  name: string | null;
  homepage: string | null;
	live_stake: string;
  active_stake: string;
  fixed_cost: string;
  margin: number;
	logo: string | null;
};