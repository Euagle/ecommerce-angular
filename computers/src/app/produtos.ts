

export interface IProduto{
    id:number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string
}

export interface IProdutoCarrinho extends IProduto{
    quantidade: number;
}


export const produtos: IProduto[]=[
    {
        id: 1, descricao: "Mouse gamer", preco: 439.00, descricaoPreco: "À vista no pix ",
        imagem: "https://benkel.com.mx/wp-content/uploads/2020/12/1-1-2048x2048.jpg",  quantidadeEstoque: 10
    },
    {
        id: 2, descricao: "Monitor muito bom ", preco: 1200.00, descricaoPreco: "À vista no pix ",
        imagem:  "https://tse2.mm.bing.net/th?id=OIP.kxR7gj2ysBbvRnBQkLrF7AHaHa&pid=Api&P=0",  quantidadeEstoque: 10
    },
    {
        id: 3, descricao: "Teclado excelente ", preco: 749.99, descricaoPreco: "À vista no pix ",
        imagem: "https://tse2.mm.bing.net/th?id=OIP.rMnV_TBZ0bXepcTFnIfH_wHaD5&pid=Api&P=0",  quantidadeEstoque: 10
    },
    {
        id: 4, descricao: "Fone de ouvido para quem joga FPS ", preco: 599.99, descricaoPreco: "À vista no pix ",
        imagem: "http://static3.tcdn.com.br/img/img_prod/221198/headset_gamer_fone_ouvido_microfone_bass_led_pc_ps4_celular_jogos_infokit_gh_x1000_xsoldado_vermelho_15737_1_20191108102534.jpg",  quantidadeEstoque: 10
    },
    {
        id: 5, descricao: "Fone de ouvido ", preco: 299.99, descricaoPreco: "À vista no pix ",
        imagem: "https://http2.mlstatic.com/fone-de-ouvido-s-fio-arco-bluetooth-corrida-caminhada-sport-D_NQ_NP_759311-MLB25541104647_042017-F.jpg",  quantidadeEstoque: 10
    },
    {
        id: 6, descricao: "Fone de ouvido bom", preco: 399.99, descricaoPreco: "À vista no pix ",
        imagem: "https://djanemagbrasil.com.br/wp-content/uploads/2019/09/hdj-x5bt-n-angle.jpg",  quantidadeEstoque: 10
    },
    {
        id: 7, descricao: "hd", preco: 499.99, descricaoPreco: "À vista no pix ",
        imagem: "https://tse4.mm.bing.net/th?id=OIP.3cuW5WcBlT8f9bskZo_LYQHaHJ&pid=Api&P=0",  quantidadeEstoque: 10
    },
    {
        id: 8, descricao: "Placa de video ", preco: 18449.99, descricaoPreco: "À vista no pix ",
        imagem: "https://http2.mlstatic.com/placa-de-video-nvidia-geforce-9500gt-1gb-ddr2-128-bits-D_NQ_NP_728302-MLB26260322380_102017-F.jpg",  quantidadeEstoque: 10
    },
    {
        id: 9, descricao: "Processador", preco: 1000, descricaoPreco: "À vista no pix ",
        imagem: "https://images.tcdn.com.br/img/img_prod/679622/processador_xeon_3_2ghz_800mhz_1mb_intel_0_m_ppga604_1016_1_20190203093312.jpg",  quantidadeEstoque: 10
    },
    {
        id: 10,
         descricao: "laptop ", 
         preco: 2500,
          descricaoPreco: "À vista no pix ",
        imagem: "https://tse4.mm.bing.net/th?id=OIP.sWSOw_r5L9sPdpVM25owuQHaHc&pid=Api&P=0",  quantidadeEstoque: 10
    }
]