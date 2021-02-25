export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6037d26b5ef2bd13f2f1e2d8',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-8uyyqk4r',
                  apiId: '8374f220-5324-4044-a5da-261b73718483'
                },
                {
                  buildHookId: '6037d26b2925b512409590dc',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-j1g7o76e',
                  apiId: '14a27aa0-4142-412f-bbba-5823d9cbb74c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/henrikmaa/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-j1g7o76e.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
