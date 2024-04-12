const mergepdfs = async (p1) => {
  
  // We're using import('pdf-merger-js') to dynamically import the pdf-merger-js module. This is compatible with both ES modules and CommonJS modules.
  // We're using await import(...) to wait for the dynamic import to complete and then accessing the default export (PDFMerger) from the imported module.
  const { default: PDFMerger } = await import('pdf-merger-js');
  
  var merger = new PDFMerger();

  for (i of p1){
    console.log(i)
    await merger.add(i);
  }
  // await merger.add("1.pdf");
  // await merger.add("2.pdf");

  let d = new Date().getTime()
  await merger.save(`public/${d}.pdf`);

  return d
}

module.exports = { mergepdfs };