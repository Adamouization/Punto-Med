export function GoogleTagManager() {
    return (
      <>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-T881Q1ZE99"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-T881Q1ZE99');
            `,
          }}
        />
      </>
    )
  }