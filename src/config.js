
const config = {
    template: "BorderTemplate",
    modules: [
        {
            name: "TemplateModule",
            position: "header",
        },
        {
            name: "BasicTime",
            position: "sidebarLeft",
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
            position: "sidebarRight",
        }
    ]
};

export default config;
