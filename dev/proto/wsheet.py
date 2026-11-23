import sys,json,subprocess
from PIL import Image, ImageDraw, ImageFont
worlds=sys.argv[1].split(',')
jobs=[]
for w in worlds:
    jobs+= [[f"s_{w}_d0",w,0,0,200],[f"s_{w}_t0",w,1,0,200],[f"s_{w}_n0",w,2,0,200],[f"s_{w}_d1",w,0,1,200],[f"s_{w}_d2",w,0,2,200]]
subprocess.run(['node','wshot.js',json.dumps(jobs)])
for w in worlds:
    o=Image.new('RGB',(900,470+235+150),'#1f1638')
    o.paste(Image.open(f"s_{w}_d0.png"),(0,0))
    o.paste(Image.open(f"s_{w}_t0.png").resize((450,235)),(0,470)); o.paste(Image.open(f"s_{w}_n0.png").resize((450,235)),(450,470))
    for i,n in enumerate(['d0','d1','d2']):
        im=Image.open(f"s_{w}_{n}.png").crop((150,240,750,390)).resize((300,75*2))
        o.paste(im,(i*300,705))
    o.save(f"mondo_{w}.png")
