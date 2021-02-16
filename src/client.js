import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: 'y0xdnwwh',
    dataset: "production",
    useCdn: true
});