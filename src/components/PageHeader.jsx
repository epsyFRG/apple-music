function PageHeader({ title }) {
  return (
    <header className="mb-3">
      <h1 className="page-title mb-2">{title}</h1>
      <div className="divider-thin" />
    </header>
  )
}

export default PageHeader
