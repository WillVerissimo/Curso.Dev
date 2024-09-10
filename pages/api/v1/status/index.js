function status(request, response) {
  response.status(200).json({ chave: "sou acima da média" });
}

export default status;
