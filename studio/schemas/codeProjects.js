export default {
    name: "CodeProject",
    title: "Code Projects",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string"
        },
        {
            name: "date",
            type: "datetime"
        },
        {
            name: "place",
            type: "string"
        },
        {
            name: 'projectImage',
            title: 'Project Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: "description",
            type: "text"
        },
        {
            name: "projectType",
            title: "Project type",
            type: "string",
            options: {
                list: [
                    { value: "personal", title: "Personal" },
                    { value: "client", title: "Client" },
                    { value: "collaboration", title: "Collaboration" },

                ]
            }
        },
        {
            name: "link",
            type: "url"
        },
        {
            name: "githubLink",
            type: "url"
        },
        {
            name: "technologiesUsed",
            title: "Technologies Used",
            type: "array",
            of: [
                {
                    type: "string"
                }
            ],
            options: {
                layout: "tags"
            }
        }
    ]
}