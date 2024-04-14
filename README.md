
An example of workiing with site-wide modals in Next.js App Router. This approach works well for modal dialogs that need to be opened from anywhere in the site. The dialog is entirely self-contained and doesn't depend on any props to show/hide itself. You can open and close the dialog easily from anywhere!

This code sample use the shadcn/ui [dialog](https://ui.shadcn.com/docs/components/dialog) component.

**Some key benefits:**
1. This approach preserves natural browser back button behavior by using `router.replace(...)` and `router.back()`. 
2. Pressing the browser back button when the dialog is open closes the dialog. 
3. Showing the dialog doesn’t become part of the browser history.
4. Preserves all animations as well as the standard behavior of opening the dialog using the DialogTrigger.
5. The URL with the query parameter can be shared as a link and will  result in the modal opening as expected.

More details on how it works: www.pranavkhandelwal.com/blog/2024/3/31/toggling-modals-in-nextjs-with-react-server-components. Feedback and PRs welcome.

# Demo:
![](https://images.squarespace-cdn.com/content/v1/51f6a734e4b04b5d7e666763/8b08c46e-7b64-422a-bba7-bcb081efc645/modal-demo.gif?format=2500w)

## Getting Started

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
