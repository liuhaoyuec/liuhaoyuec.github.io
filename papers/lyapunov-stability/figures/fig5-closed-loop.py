"""第 6 节闭环例子：
    x1' = -x1^3 + x2
    x2' = u = -x1 - k x2
生成相图 + 时间响应的矢量 PDF。
"""
import numpy as np
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from scipy.integrate import solve_ivp

k = 2.0


def rhs(_t, z):
    x1, x2 = z
    u = -x1 - k * x2
    return [-x1**3 + x2, u]


def control(z):
    x1, x2 = z
    return -x1 - k * x2


# ---------- 相图 ----------
fig, (ax_phase, ax_time) = plt.subplots(1, 2, figsize=(10.2, 4.1), constrained_layout=True)

x1g = np.linspace(-2.6, 2.6, 23)
x2g = np.linspace(-3.0, 3.0, 25)
X1, X2 = np.meshgrid(x1g, x2g)
U = -X1**3 + X2
V = -X1 - k * X2
speed = np.sqrt(U**2 + V**2)
ax_phase.streamplot(
    X1, X2, U, V, color="#CBD5E1", linewidth=0.7,
    density=1.05, arrowsize=0.8, arrowstyle="-|>",
)

starts = [(2.2, 1.0), (-2.2, 1.6), (1.6, -2.2), (-1.6, -1.7), (0.7, 2.6), (-0.7, -2.6)]
colors = ["#1E3A8A", "#0F766E", "#B45309", "#991B1B", "#5B21B6", "#0E7490"]
for (x10, x20), color in zip(starts, colors):
    sol = solve_ivp(rhs, (0, 8), (x10, x20), t_eval=np.linspace(0, 8, 600), rtol=1e-8)
    ax_phase.plot(sol.y[0], sol.y[1], color=color, lw=1.35)
    i = 70
    ax_phase.annotate(
        "", xy=(sol.y[0, i + 4], sol.y[1, i + 4]),
        xytext=(sol.y[0, i], sol.y[1, i]),
        arrowprops=dict(arrowstyle="-|>", color=color, lw=1.2, mutation_scale=11),
    )
    ax_phase.plot(x10, x20, "o", color=color, ms=4.5, mec="white", mew=0.6)

ax_phase.set_xlabel(r"$x_1$")
ax_phase.set_ylabel(r"$x_2$")
ax_phase.set_title(r"(a) Closed-loop phase portrait ($k=2$)", fontsize=11)
ax_phase.set_xlim(-2.7, 2.7)
ax_phase.set_ylim(-3.1, 3.1)
ax_phase.grid(True, color="#E2E8F0", lw=0.6)
ax_phase.axhline(0, color="#94A3B8", lw=0.8)
ax_phase.axvline(0, color="#94A3B8", lw=0.8)
ax_phase.set_aspect("equal", adjustable="box")

# ---------- 时间响应 ----------
sol = solve_ivp(rhs, (0, 8), (2.0, 1.0), t_eval=np.linspace(0, 8, 1000), rtol=1e-9)
t = sol.t
x1, x2 = sol.y
u = -x1 - k * x2
ax_time.plot(t, x1, color="#1E3A8A", lw=1.7, label=r"$x_1(t)$")
ax_time.plot(t, x2, color="#0F766E", lw=1.7, label=r"$x_2(t)$")
ax_time.plot(t, u, color="#B45309", lw=1.3, ls="--", label=r"$u(t)$")
ax_time.axhline(0, color="#94A3B8", lw=0.8)
ax_time.set_xlabel(r"$t$")
ax_time.set_title(r"(b) Time response (initial state $(2,1)$)", fontsize=11)
ax_time.grid(True, color="#E2E8F0", lw=0.6)
ax_time.legend(frameon=False, fontsize=9, loc="upper right")
ax_time.set_xlim(0, 8)

fig.savefig("fig5-closed-loop.pdf", bbox_inches="tight")
fig.savefig("fig5-closed-loop.png", dpi=200, bbox_inches="tight")
print("saved fig5-closed-loop.pdf / .png")
