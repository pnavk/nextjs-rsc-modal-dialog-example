
An example of workiing with site-wide modals in Next.js App Router. This approach works well for modal dialogs that need to be opened from anywhere in the site. The dialog is entirely self-contained and doesn't depend on any props to show/hide itself. You can open and close the dialog easily from anywhere!

This code sample use the shadcn/ui [dialog](https://ui.shadcn.com/docs/components/dialog) component.

**Goals:**
1. Easily toggle the modal open or closed from anywhere by simply using a link, without passing props.
2. Preserve the native back-button behavior of the browser. Showing/hiding the modal should not alter this behavior.
3. Preserve animations for showing and hiding the modal.
4. Preserve the  behavior of the DialogTrigger and DialogClose components that come packaged with the Dialog component from the shadcn/ui library.
5. Share a link to the modal externally and the modal should render when users arrive to the site by clicking the link.

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
