
const config = {
    template: {
        name: "Grid",
        properties: {
            rows: 3,
            cols: 3,
        }
    },
    modules: [
        {
            name: "TemplateModule",
            position: "0",
        },
        {
            name: "BasicTime",
            position: "1",
            properties: {
                showSeconds: true,
                user23hTime: true
            }
        },
        {
            name: "Time",
            position: "3",
        },
        {
            name: "asdasd",
            position: "8",
        },
        {
            name: "RandomFact",
            position: "6",
        }
    ]
};

export default config;
