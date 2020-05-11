
const config = {
    template: "borderTemplate.css",
    modules: [
        {
            name: "TemplateModule",
            position: "header",
        },
        {
            name: "BasicTime",
            position: "leftSidebar",
            properties: {
                showSeconds: true,
                user23hTime: true
            }
        },
        {
            name: "Time",
            position: "footer",
        },
        {
            name: "asdasd",
            position: "footer",
        }
    ]
};

export default config;
