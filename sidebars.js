module.exports = {
  someSidebar: {
    Dzen: ['dzen/getting-started', 'dzen/how-to-write-documentation'],
    Overview: [
      'overview/about',
      'overview/getting-started',
      'overview/benefits'
      // 'overview/key-features'
      // 'overview/what-is-new'
    ],
    Java: [
      'java/introduction',
      'java/getting-started',
      {
        type: 'category',
        label: 'Core Features',
        items: [
          // authorization & authentication
          // resilience & caching
          {
            type: 'category',
            label: 'OData',
            items: [
              'java/features/odata/overview',
              'java/features/odata/java-generate-odata-vmd-v2-v4',
              'java/features/odata/use-generated-odata-vdm-v2-v4'
            ]
          },
          {
            type: 'category',
            label: 'Connectivity',
            items: [
              'java/features/connectivity/sdk-connectivity-destination-service'
              ]
          },
          {
            type: 'category',
            label: 'REST',
            items: [
              'java/features/rest/sap-cloud-sdk-as-a-service',
              {
                type: 'category',
                label: 'Released clients',
                items: [
                  'java/features/rest/clients/workflow-api',
                  'java/features/rest/clients/currency-conversion',
                  'java/features/rest/clients/core-services',
                  'java/features/rest/clients/blockchain-business-sdk'
                ]
              }
            ]
          }
        ]
      },
      //   {
      //     type: 'category',
      //     label: 'Features',
      //     items: [
      //       'cli',
      //       'project-archetype',
      //       'vdm',
      //       'odata',
      //       'generate-client',
      //       'cloud-abstractions',
      //       'pipeline',
      //       'caching',
      //       'resilience'
      //     ]
      //   },
      //   {
      //     type: 'category',
      //     label: 'Advanced features',
      //     items: [
      //       'untyped-client',
      //       'odata-helper-classes',
      //       'utility-classes',
      //       'open-api-client',
      //       'sdk-as-a-service',
      //       ''
      //     ]
      //   },
      //   'client-libraries',
      {
        type: 'category',
        label: 'Guides',
        items: [
          'java/guides/sap-cloud-sdk-linux-how-to',
          'java/guides/cf-cli',
          'java/guides/cf-deploy'
          //       'java/how-to/test-odata-service',
          //       'java/how-to/build-client-for-cap',
          //       'java/how-to/cap-with-client-sdk',
          //       'java/how-to/generate-open-api-client',
          //       'java/how-to/workflow-api',
          //       'java/how-to/s4hana-api',
          //       'java/how-to/business-logging',
          //       'java/how-to/sap-graph',
          //       'java/how-to/xsuaa-broker',
          //       'java/how-to/sdk-with-mocked-xsuaa',
          //       'java/how-to/jwt-handling',
          //       'java/how-to/app-router',
          //       'java/how-to/configure-ide'
        ]
      },
      //   'hot-to-contribute',
      //   'support',
      //   'feature-request',
      //   'Feedback',
      //   'thank-you',
      //   'release-notes'
      // ],
      // 'JS and Node.js': [
      //   {
      //     type: 'category',
      //     label: 'Getting started',
      //     items: [
      //       'java/getting-started/tools-java-sdk',
      //       'java/getting-started/getting-java-sdk',
      //       'java/getting-started/verify-your-setup',
      //       'java/getting-started/generating-vdm',
      //       'java/getting-started/hello-odata'
      //     ]
      //   },
      //   {
      //     type: 'link',
      //     label: 'Tutorials',
      //     href:
      //       'https://developers.sap.com/tutorial-navigator.html?tag=products:technology-platform/sap-cloud-sdk/sap-cloud-sdk&tag=topic:java'
      //   }
      'java/api-reference-java'
    ],
    JavaScript: [
      'js/introduction',
      'js/getting-started',
      'js/api-reference-js-ts'
    ],
    'Continuous Delivery': ['devops/getting-started'],
    // FAQ: ['faq/frequently-asked-questions'],
    // Support: ['support/support'],
    'Community calls': ['community-calls/community-calls-2020'],
    'Related projects': [
      'related-projects/cloud-application-model'
      //   'related-projects/sap-cloud-for-realestate',
      //   'related-projects/sap-s4-hana',
      //   'related-projects/sap-xsuaa-cf'
    ]
  }
}