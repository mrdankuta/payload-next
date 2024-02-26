
export const Header = {
    slug: 'header',
    labels: {
        singular: 'Header',
        plural: 'Headers'
    },
    access: {
        read: () => true,
    },
    upload: true,
    fields: [
        {
            name: 'logo',
            label: 'Logo',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'NavLinks',
            label: 'Nav Links',
            type: 'array',
            fields: [
                {
                    name: 'label',
                    label: 'Label',
                    type: 'text',
                },
                {
                    name: 'link',
                    label: 'Link',
                    type: 'text',
                },
            ],
        }
    ]
}