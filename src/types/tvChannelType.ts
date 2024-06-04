import TVPackageType from './tvPackageType';
export default interface TVChannel{
    id: string,
    mobile_enabled: boolean,
    position: number,
    bkp_position: string,
    caption_short: string,
    caption: string,
    icon_url: string,
    image_wide: string,
    num_past_epg_days: string,
    num_future_epg_days: string,
    streaming_url: string,
    channel_encryption: boolean,
    resolution_name: string,
    is_favorite: boolean,
    pvr_status: boolean,
    timeshift_status: boolean,
    restart: boolean,
    is_catchup: boolean,
    catchup_url: string,
    pre_roll: string,
    mid_roll: string,
    dvr_duration: number,
    genres: string,
    language: string,
    p2p_status: boolean,
    web_login: boolean,
    tv_category_id: number,

    tv_categories: Array<any>,
    
    custom_data: string,
    content_provider_id: number,
    content_provider_name: string,
    content_provider_logo: string,
    content_provider_custom_data: string,
    package_status: string,
    packages: Array<TVPackageType>,
}