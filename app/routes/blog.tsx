import { LinksFunction, MetaFunction } from '@remix-run/node'
import { Outlet } from '@remix-run/react';
import styles from 'highlight.js/styles/github-dark-dimmed.css'

export const links: LinksFunction = () => {
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "New Remix App",
    viewport: "width=device-width,initial-scale=1",
  });

export default function Blog(){

    return (
        <div className="flex justify-center">
            <div className="prose lg:prose-xl py-10">
                <Outlet />
            </div>
        </div>
    )

}