// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vue from '@astrojs/vue';






// https://astro.build/config
export default defineConfig({
	integrations: [
		vue(),
		starlight({
			title: 'Vue.js',
			favicon: '/favicon.svg',
            customCss:[ './src/styles/custom.css'		
			],
		
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/vuejs/' },
			    { icon: 'twitter', label: 'Twitter', href: 'https://x.com/vuejs' }, 
				{ 	icon: 'discord', label: 'Discord', href: 'https://discord.com/invite/vue' },
			],
			
			sidebar: [
				{
					label: 'Getting Started',
					items: [// Each item here is one entry in the navigation menu.
						{ label: 'Introduction', slug: 'getting-started/introduction' },
						{ label: 'Quick Start', slug: 'getting-started/quick-start'},
					]
				},

				{	label: 'Essentials',
					items: [// Each item here is one entry in the navigation menu.
						{label:'Creating an Application', slug: 'essentials/creating-an-application'},
						{label:'Template Syntax', slug:'essentials/template-syntax'},
						{label:'Reactivity Fundamentals', slug:'essentials/reactivity-fundamentals'},
						{label:'Computed Properties', slug:'essentials/computed-properties'},
						{label:'Class and Style Bindings', slug:'essentials/class-and-style-bindings'},
					]
					
				},
				{	label: 'Components In-Depth',
					items: [// Each item here is one entry in the navigation menu.
						{label:'Registration', slug:'components-in-depth/registration'},						
						{label:'Props', slug:'components-in-depth/props'},
						{label:'Events', slug:'components-in-depth/events'},
						{label:'Component v-model', slug:'components-in-depth/component-v-model'},
						{label:'Fallthrough Attributes', slug:'components-in-depth/fallthrough-attributes'},
					]

				},

				{
					label:'Reusability',
					items:[// Each item here is one entry in the navigation menu.
						{label:'Composables', slug:'reusability/composables'},
						{label:'Custom Directives', slug:'reusability/custom-directives'},
						{label:'Plugins', slug:'reusability/plugins'},					]
				},
				{
					label:'Built-in Components',
					items:[// Each item here is one entry in the navigation menu.
						{label:'Transitions', slug:'built-in-components/transition'},
						{label:'TransitionGroup', slug:'built-in-components/transitiongroup'},
						{label:'KeepAlive', slug:'built-in-components/keepalive'},
						{label:'Teleport', slug:'built-in-components/teleport'},
						{label:'Suspense', slug:'built-in-components/suspense'},
					]
					
				},
				{	label:'Scaling Up',
					items:[// Each item here is one entry in the navigation menu.
						{label:'Single-File Components', slug:'scaling-up/single-file-components'},
						{label:'Tooling', slug:'scaling-up/tooling'},
						{label:'Routing', slug:'scaling-up/routing'},
						{label:'State Management', slug:'scaling-up/state-management'},
						{label:'Testing', slug:'scaling-up/testing'},
					]


				},
				{
					label:'Best Practices',
					items:[// Each item here is one entry in the navigation menu.
						{label:'Production Deployment', slug:'best-practices/production-deployment'},
						{label:'Performance', slug:'best-practices/performance'},
						{label:'Accessibility', slug:'best-practices/accessibility'},
						{label:'Security', slug:'best-practices/security'},

					]
				},
				{
					label:'TypeScript',
					items:[// Each item here is one entry in the navigation menu.
						{label:'Overview', slug:'typescript/overview'},
						{label:'TS with Composition API', slug:'typescript/ts-with-composition-api'},
						{label:'TS with Options API', slug:'typescript/ts-with-options-api'},
					]
				},
				{
					label:'Extra Topics',
					items:[// Each item here is one entry in the navigation menu.
						{label:'Ways of Using Vue', slug:'extra-topics/ways-of-using-vue'},
						{label:'Composition API FAQ', slug:'extra-topics/composition-api-faq'},
						{label:'Reactivity ', slug:'extra-topics/reactivity-in-depth'},
						{label:'Rendering Mechanism ', slug:'extra-topics/rendering-mechanism'},
						{label:'Render Function & JSX', slug:'extra-topics/render-functions-and-jsx'},
						
					]
					
				},


			],
		}),
	],
});
