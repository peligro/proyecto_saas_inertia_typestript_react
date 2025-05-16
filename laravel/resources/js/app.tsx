import './bootstrap';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import Layout from './Layout/Layout';
import { PageModuleInterface } from './Interfaces/PageModuleInterface';



createInertiaApp({
    title: (title) =>
        title ? `Tamila - ${title}` : "Tamila",
    resolve: (name) => {
        const pages = import.meta.glob<PageModuleInterface>('./Pages/**/*.tsx', { eager: true });
        const pagePath = `./Pages/${name}.tsx`;

        const pageModule = pages[pagePath];

        if (!pageModule) {
            throw new Error(`Page "${name}" not found.`);
        }

        const pageComponent = pageModule.default;

        // ✅ Ahora recibimos props y los pasamos a Page
        const pageWithLayout = (props: any) => {
            const Page = pageComponent;
            const layout = pageModule.layout ? (
                pageModule.layout(<Page {...props} />)
            ) : (
                <Layout><Page {...props} /></Layout>
            );

            return layout;
        };

        return {
            ...pageModule,
            default: pageWithLayout, // ✅ Aquí ahora sí se pasan props
        };
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
    progress: {
        color: '#ff0000',
        showSpinner: true
    }
});